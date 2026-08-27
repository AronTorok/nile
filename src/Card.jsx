const Card = ({ link, name, image, text }) => {
  return (
    <div
      className="2xl:w-1/3 lg:w-1/2 sm:w-29/50 w-2/3 bg-[rgba(16,62,43,0.7)] backdrop-blur-xs rounded-md shadow-2xl border border-[rgba(239,225,169,0.3)] p-4 pt-3"
      id={link}
    >
      <h1 className="text-4xl font-bold pb-4.5 text-center">{name}</h1>
      <img src={image} alt={name} className="rounded-md pb-3" />
      <p>{text}</p>
    </div>
  );
};

export default Card;
