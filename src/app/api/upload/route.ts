import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "@langchain/openai";
import pdf from "pdf-extraction";

// const OPENAI_API_KEY = "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";
// const OPENAI_API_KEY = "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";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function POST(request: NextRequest, response: NextResponse) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;
  if (!file) {
    return NextResponse.json({ success: false });
  }
  const bytes = await file?.arrayBuffer();
  const buffer = Buffer.from(bytes);
  console.log("buffer", buffer);

  const res = await pdf(buffer);

  const numPages = res.numpages;
  const text = res.text;
  console.log("numPages", numPages);
  console.log("text", text);

  const llm = new OpenAI({
    openAIApiKey: OPENAI_API_KEY,
    modelName: "gpt-3.5-turbo",
  });

  const resp = await llm.invoke(
    `Identify and capture relevant information such as names, dates, addresses, and any other details present in the text. Return the  extracted key-value pairs  in json as array of objects containing attr_name,attr_value properties with corresponding values .
    :${text}`
  );
  console.log("resp", resp);

  return NextResponse.json({ text: resp });
}
