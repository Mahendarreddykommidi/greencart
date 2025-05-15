import { assets, footerLinks } from "../greencart_assets/assets"
export default function Footer ()  {

  return (
      <div className="px-6 md:px-16 bg-[#4fbf8b]/20 mt-15 w-full absolute left-0 right-0">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
              <div>
                  <img className="w-34 md:w-32" src={assets.logo} alt="dummyLogoColored" />
                  <p className="max-w-[410px] mt-6">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
                  </p>
              </div>
              <div className="flex items-center flex-wrap gap-15 w-full md:w-[60%]">
                  {footerLinks.map((section, index) => (
                      <div key={index}>
                          <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                          <ul className="text-sm space-y-1">
                              {section.links.map((link, i) => (
                                  <li key={i}>
                                      <a href={link.url} className="hover:underline transition">
                                          {link.text}
                                      </a>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>
          </div>
          <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
              Copyright 2025 © PrebuiltUI All Right Reserved.
          </p>
      </div>
  );
};