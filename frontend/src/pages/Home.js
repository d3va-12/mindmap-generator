import InputForm from "../components/InputForm";

function Home({ onSubmit }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">AI-Powered Mind Map Generator</h1>
      <p className="mb-4">Upload a PDF, enter text, or provide a URL to generate an interactive mind map.</p>
      <InputForm onSubmit={onSubmit} />
    </div>
  );
}

export default Home;