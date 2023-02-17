import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import styles from "../styles/intro.module.css";

const INDUSTRY = [
  "Architecture and Construction",
  "Automotive and Transportation",
  "Entertainment and Media",
  "Social Media",
  "Gaming",
  "Education",
  "Healthcare",
  "Real Estate",
  "Retail",
  "Travel and Tourism",
  "Event",
];

const WORK = [
  [
    ["Building design", "creating virtual models of buildings and structures"],
    ["Site planning", "planning and designing virtual construction sites"],
    [
      "Safety planning",
      "creating virtual simulations for safety planning and training",
    ],
    ["Project management", "managing virtual construction projects"],
    ["Cost estimation", "estimating costs of virtual construction projects"],
  ],
  [
    ["Vehicle design", "creating virtual models of vehicles"],
    [
      "Manufacturing and assembly",
      "creating virtual simulations for manufacturing and assembly",
    ],
    [
      "Training and simulation",
      "creating virtual simulations for training and testing",
    ],
    [
      "Logistics and supply chain",
      "managing virtual logistics and supply chain",
    ],
    [
      "Research and development",
      "creating virtual simulations for research and development",
    ],
  ],
  [
    [
      "Film and video production",
      "creating virtual film and video productions",
    ],
    ["Live performance", "creating virtual live performances"],
    ["Broadcasting", "broadcasting virtual events and shows"],
    [
      "Advertising",
      "creating immersive and interactive advertising experiences",
    ],
    ["Post-production", "editing and enhancing virtual content"],
  ],
  [
    ["Platform development", "creating virtual social spaces"],
    ["Platform management", "managing and maintaining virtual social spaces"],
    ["Platform marketing", "promoting and marketing virtual social spaces"],
    ["Platform research", "researching virtual social spaces"],
    [
      "Platform monetization",
      "developing ways to monetize virtual social spaces",
    ],
    [
      "Content creation",
      "creating immersive and interactive content for virtual social spaces",
    ],
    [
      "Community management",
      "managing and fostering online communities in virtual social spaces",
    ],
    [
      "User experience design",
      "designing user-friendly and immersive experiences for virtual social spaces",
    ],
  ],
  [
    ["Game development", "creating interactive and immersive virtual worlds"],
    ["Game testing", "testing and debugging virtual worlds before release"],
    ["Game management", "managing and maintaining virtual worlds for players"],
    ["Game monetization", "developing ways to monetize virtual worlds"],
    [
      "Game marketing",
      "promoting and marketing virtual worlds to potential players",
    ],
  ],
  [
    [
      "Curriculum development",
      "creating interactive and immersive learning experiences",
    ],
    [
      "Instructional design",
      "designing and delivering interactive and immersive learning experiences",
    ],
    [
      "Evaluation and assessment",
      "evaluating student learning in immersive environments",
    ],
    [
      "Professional development",
      "providing professional development opportunities for teachers in immersive environments",
    ],
    [
      "Technology integration",
      "integrating immersive technology into the classroom",
    ],
  ],
  [
    [
      "Medical training",
      "providing realistic and immersive simulations for medical training",
    ],
    ["Patient therapy", "using immersive simulations for patient therapy"],
    ["Medical research", "using immersive simulations for medical research"],
    [
      "Medical planning",
      "using immersive simulations for medical planning, such as surgical planning",
    ],
    ["Medical education", "using immersive simulations for medical education "],
  ],
  [
    [
      "Property development",
      "creating virtual tours of properties for potential buyers",
    ],
    [
      "Property management",
      "managing and maintaining virtual tours of properties",
    ],
    [
      "Property marketing",
      "promoting and marketing virtual tours of properties to potential buyers",
    ],
    [
      "Property research",
      "researching virtual tours of properties for potential buyers",
    ],
    ["Property sales", "closing sales on virtual tours of properties "],
  ],
  [
    [
      "Product development",
      "creating virtual stores and products for customers",
    ],
    [
      "Product management",
      "managing and maintaining virtual stores and products",
    ],
    [
      "Product marketing",
      "promoting and marketing virtual stores and products to customers",
    ],
    [
      "Product research",
      "researching virtual stores and products for customers",
    ],
    ["Product sales", "closing sales on virtual stores and products "],
  ],
  [
    [
      "Destination development",
      "creating virtual tours and experiences of destinations",
    ],
    [
      "Destination management",
      "managing and maintaining virtual tours and experiences of destinations",
    ],
    [
      "Destination marketing",
      "promoting and marketing virtual tours and experiences of destinations to potential travelers",
    ],
    [
      "Destination research",
      "researching virtual tours and experiences of destinations for potential travelers",
    ],
    [
      "Destination sales",
      "closing sales on virtual tours and experiences of destinations",
    ],
  ],
  [
    ["Event planning", "planning virtual events"],
    ["Event management", "managing and maintaining virtual events"],
    ["Event marketing", "promoting and marketing virtual events"],
    ["Event research", "researching virtual events"],
    ["Event sales", "closing sales on virtual events"],
  ],
];

const Introduction = () => {
  const selectRef = useRef();

  const [work, setWork] = useState([]),
    [industry, setIndustry] = useState([]);

  const [iValue, setIValue] = useState(),
    [disabled, setDisabled] = useState(true),
    [help, setHelp] = useState("");

  useEffect(() => {
    setIndustry(
      INDUSTRY.map((e, i) => ({
        value: i,
        label: e,
      }))
    );
  }, []);

  useEffect(() => {
    selectRef.current.clearValue();

    setWork(
      WORK[iValue]?.map((e, i) => ({
        value: i,
        label: e[0],
      }))
    );
  }, [iValue]);

  // SELECT STYLES
  const colourStyles = {
    control: base => ({
      ...base,
      border: 0,
      borderBottom: "1px solid black",
      backgroundColor: "transparent",
      cursor: "pointer",
      borderRadius: 0,
      color: "#bf0aff",
      boxShadow: "none",
    }),
    option: (styles, { isSelected }) => ({
      ...styles,
      backgroundColor: isSelected ? "#51718d" : "white",
      fontSize: "0.9rem",
      textAlign: "left",
      cursor: "pointer",
      borderBottom: "1px solid black",
      background: "linear-gradient(86.63deg, #bf0aff, #940bff 92.43%, #1d26ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",

      ":active": {
        ...styles[":active"],
        backgroundColor: "",
      },
    }),
    dropdownIndicator: base => ({
      ...base,
      display: "none",
    }),
    noOptionsMessage: base => ({
      ...base,
      fontSize: "1rem",
    }),
    indicatorSeparator: base => ({
      ...base,
      display: "none",
    }),
    placeholder: defaultStyles => ({
      ...defaultStyles,
      color: "",
    }),
  };

  return (
    <div className={styles.arrow_wrapper}>
      <div className={styles.arrows_text}>
        <p className={styles.text}>
          <span>I am in</span>
          <Select
            id="industry"
            placeholder="an awesome"
            options={industry}
            isSearchable={true}
            styles={colourStyles}
            onChange={val => setIValue(val.value)}
          />
          <span className={styles.hide}>space</span>
        </p>

        <p className={styles.text}>
          <span>and am interested in</span>
          <Select
            id="work"
            placeholder="an awesome"
            ref={selectRef}
            options={work}
            isSearchable={true}
            styles={colourStyles}
            noOptionsMessage={() => "pick your space"}
            onChange={val =>
              setHelp(
                val
                  ? WORK[iValue][val.value][1] + "."
                  : "proving my awesomeness!"
              )
            }
          />
        </p>

        <p className={styles.text}>
          <span>domain. Neodonya can help me in</span>
        </p>

        <p className={styles.text} style={{ maxWidth: "100%" }}>
          <span className={styles.gradient}>{help}</span>
        </p>
      </div>

      <div className={styles.arrows} />
    </div>
  );
};

export default Introduction;
