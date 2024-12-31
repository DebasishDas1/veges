type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <div className="md:text-6xl text-4xl font-bold py-16 text-center flex justify-center">
      <h1>
        <span className="bg-gradient-to-r from-green-400 to-teal-600 bg-clip-text text-transparent">
          Biryani
        </span>{" "}
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
