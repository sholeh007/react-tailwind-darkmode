import Logo from "../../Molecules/Logo";

export default function Footer() {
  return (
    <div className="p-8 bg-slate-900 flex justify-around items-center">
      <div className="hidden md:block">
        <Logo hasFooter={true} />
      </div>
      <div>
        <p className="text-slate-100">
          &copy;2022 Design with <span className="text-red-600">&#9825;</span>{" "}
          by Lama Dev{" "}
        </p>
      </div>
      <div className="hidden md:flex justify-center items-center space-x-4">
        <img className="w-4 h-4" src="/img/twitter.png" alt="twitter" />
        <img className="w-4 h-4" src="/img/facebook.png" alt="facebook" />
        <img className="w-4 h-4" src="/img/instagram.png" alt="instagram" />
        <img className="w-4 h-4" src="/img/linkedin.png" alt="linkedin" />
      </div>
    </div>
  );
}
