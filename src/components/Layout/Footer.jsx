import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Footer.module.css";

const cx = classNames.bind(styles);

const footer = [
   {
      header: "customer services",
      content: [
         "Help & Contact Us",
         "Returns & Refunds",
         "Online Stores",
         "Terms & Conditions",
      ],
   },
   {
      header: "company",
      content: ["What We Do", "Available Services", "Lastest Posts", "FAQs"],
   },
   {
      header: "Social Media",
      content: ["Twiter", "Instagram", "Facebook", "Pinterest"],
   },
];

function Footer() {
   return (
      <footer className={cx("footer")}>
         <div className="container">
            <div className="row">
               {footer.map((col, i) => {
                  return (
                     <div className="col" key={i}>
                        <h3 className={cx("title")}>{col.header}</h3>
                        <ul>
                           {col.content.map((item, i) => {
                              return (
                                 <li key={i} className={cx("item")}>
                                    <Link to="#">{item}</Link>
                                 </li>
                              );
                           })}
                        </ul>
                     </div>
                  );
               })}
            </div>
         </div>
      </footer>
   );
}

export default Footer;
