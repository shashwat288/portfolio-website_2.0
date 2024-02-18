import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
        <img src="https://img.freepik.com/premium-vector/ss-letter-logo-design-black-background-initial-monogram-letter-ss-logo-design-vector-template_634196-1207.jpg?w=740" alt="" height={50} width={50} className="rounded-full"/>
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;