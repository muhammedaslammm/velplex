const Footer = () => {
  return (
    <footer className="mt-auto md:fixed bottom-0 left-0 right-0 bg-black text-white text-center text-[.9rem] tracking-[.05rem] py-2">
      &copy; {new Date().getFullYear()} Velplex Industries Private Limited
    </footer>
  );
};

export default Footer;
