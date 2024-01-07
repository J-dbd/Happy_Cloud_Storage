interface SubmitButtonProps {
  text: string;
}

export const SubmitButton = ({ text }: SubmitButtonProps) => {
  return (
    <>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-blue-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        {text}
      </button>
    </>
  );
};
