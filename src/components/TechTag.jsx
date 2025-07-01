import "./techTag.css";
export default function TechTag({ name, img, alt }) {
  return (
    <div className="techTag">
      <div>
        <img src={img} alt={alt} />
        <p>{name}</p>
      </div>
    </div>
  );
}
