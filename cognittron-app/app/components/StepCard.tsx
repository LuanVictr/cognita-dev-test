function StepCard({ title, content }: { title: string; content: string }) {
    return (
      <div className="bg-white rounded-lg border border-gray-300 p-6 gap-8">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-base text-content-color">{content}</p>
      </div>
    );
  }
  
  export default StepCard;
  