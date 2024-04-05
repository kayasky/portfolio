import { useFormStatus } from "react-dom";

export default function FormFields() {
  const { pending } = useFormStatus();

  return (
    <>
      <input
        className="h-14 rounded-lg borderBlack p-4"
        type="email"
        placeholder="Your email"
        required
        name="senderEmail"
        maxLength={100}
        disabled={pending}
      />
      <textarea
        className="h-52 my-3 rounded-lg borderBlack p-4"
        placeholder="Your message"
        required
        name="message"
        maxLength={5000}
        disabled={pending}
      ></textarea>
    </>
  );
}
