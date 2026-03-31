import { ContactFormData } from "../types.ts";

export const submitContactForm = async (
  formData: ContactFormData
): Promise<string> => {
  const encodedScriptUrl = new Uint8Array([
  104,116,116,112,115,58,47,47,115,99,114,105,112,116,46,103,
  111,111,103,108,101,46,99,111,109,47,109,97,99,114,111,115,
  47,115,47,65,75,102,121,99,98,119,69,86,85,80,55,86,108,
  97,89,89,80,48,84,79,105,66,73,104,97,116,114,88,49,106,
  99,88,83,104,109,82,72,79,68,88,49,98,54,50,120,72,114,
  106,88,86,106,113,112,69,69,89,71,52,86,69,69,71,110,48,
  79,77,70,50,111,69,48,89,65,47,101,120,101,99
]);

  const td = new TextDecoder();

  const googleScriptUrl = td.decode(encodedScriptUrl);

  const formBody = new FormData();
  formBody.append("name", formData.name);
  formBody.append("email", formData.email);
  formBody.append("message", formData.message);
  if (formData.phone) {
    formBody.append("phone", formData.phone);
  }

  try {
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      body: formBody,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const resultText = await response.text();
    return resultText;
  } catch (error) {
    console.error("Error submitting form:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";
    return Promise.reject(
      new Error(`Something went wrong. Please try again later. ${errorMessage}`)
    );
  }
};
