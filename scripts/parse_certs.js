import { GoogleGenAI, Type } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

const certsDir = "./CERTIFICATES";
const publicCertsDir = "./public/certificates";
const outputJsonFile = "./src/resources/certificates.json";

// Ensure output directories exist
fs.mkdirSync(publicCertsDir, { recursive: true });
fs.mkdirSync(path.dirname(outputJsonFile), { recursive: true });

// Specific primary distinct certificate files to avoid duplicates (like pngs of same pdfs, or updater files)
const primaryCertFiles = [
  "AI_Fundamentals_with_IBM_SkillsBuild_certificate_25cb1ar28-mitsgwl-ac-in_590fef92-2276-4927-bf12-91b1bdf1960e.pdf",
  "Aryan Narwariya.pdf",
  "Computer_Hardware_Basics_certificate_25cb1ar28-mitsgwl-ac-in_341c787e-d1c7-4f77-9630-da0d6a5d4ec1.pdf",
  "Getting_Started_with_Cisco_Packet_Tracer_certificate_25cb1ar28-mitsgwl-ac-in_e6a17561-b44d-4276-929e-e8343db54d71.pdf",
  "Introduction_to_IoT_certificate_25cb1ar28-mitsgwl-ac-in_6eaa2f2c-8083-425f-8e0b-a01ebf9d8101.pdf"
];

async function main() {
  console.log(`Starting parsing for ${primaryCertFiles.length} primary certificates...`);
  const results = [];

  for (const file of primaryCertFiles) {
    const filePath = path.join(certsDir, file);
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      continue;
    }

    const stats = fs.statSync(filePath);
    console.log(`Processing file: ${file} (${(stats.size / 1024).toFixed(1)} KB)`);

    // Copy file to public/certificates for serving
    const publicFilePath = path.join(publicCertsDir, file);
    fs.copyFileSync(filePath, publicFilePath);
    console.log(`Copied ${file} to public serving folder.`);

    // Read file and convert to base64
    const fileBuffer = fs.readFileSync(filePath);
    const base64Data = fileBuffer.toString("base64");

    try {
      // Use Gemini to analyze the certificate
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: [
          {
            inlineData: {
              data: base64Data,
              mimeType: "application/pdf"
            }
          },
          "Extract metadata from this certificate. Return a JSON object with: " +
          "1. 'title': the achievement/course/certificate title. " +
          "2. 'issuer': the issuing company/organization/institution. " +
          "3. 'date': the issue date (standardized, e.g. 'June 26, 2026' or 'June 2026'). " +
          "4. 'recipient': the student/person name who received it. " +
          "5. 'credentialId': any credential ID, certificate number, or verification ID if present, otherwise empty. " +
          "6. 'skills': an array of 2-4 key skills or topics learned/certified. " +
          "7. 'description': a concise 1-2 sentence description of what the certificate validates or covers."
        ],
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              issuer: { type: Type.STRING },
              date: { type: Type.STRING },
              recipient: { type: Type.STRING },
              credentialId: { type: Type.STRING },
              skills: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              description: { type: Type.STRING }
            },
            required: ["title", "issuer", "date", "recipient", "skills", "description"]
          }
        }
      });

      const text = response.text;
      if (text) {
        const metadata = JSON.parse(text);
        metadata.fileName = file;
        metadata.path = `/certificates/${file}`;
        console.log(`Successfully parsed metadata for ${file}:`, metadata);
        results.push(metadata);
      } else {
        console.error(`Empty response from Gemini for ${file}`);
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }

  // Wrap structured metadata under the student's email and name
  const finalStructure = {
    student: {
      name: "Aryan Narwariya",
      email: "25cb1ar28@mitsgwl.ac.in"
    },
    certificates: results
  };

  // Write JSON output
  fs.writeFileSync(outputJsonFile, JSON.stringify(finalStructure, null, 2));
  console.log(`Wrote structured records to ${outputJsonFile}`);
}

main().catch(console.error);
