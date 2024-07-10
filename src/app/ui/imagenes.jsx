import Image from "next/image";
export function GigantImgGrey(props) {
  return (
    <div className="w-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
      <Image
        class="h-auto w-full rounded-lg"
        src={props.src}
        alt="image description"
        width={props.width}
        height={props.height}
      />
    </div>
  );
}
export function Imagen(props) {
  return (
    <Image
      class="h-auto w-full rounded-lg "
      src={props.src}
      alt="image description"
      width={props.width}
      height={props.height}
    />
  );
}
