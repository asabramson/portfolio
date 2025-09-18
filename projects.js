// Temporary until I add my actual projects from my other site (where they are hosted)
const placeholderText = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."

// Hard coded values stored here, referenced as “data-name”
const projects = {
    projectSite: {
    title: "My Projects Site",
    link:  "https://github.com/asabramson/aaron-projects-site",
    text:  "Currently the above link points to the Github repository for my projects website, as the actual site is down due to issues with Vercel and my Neon serverless Postgres database. Hopefully should be back up soon!"
    },
    projectAIPlayer: {
    title: "Lasker Morris AI Player",
    link:  "https://github.com/asabramson/ai_player_lasker_morris",
    text:  "Lasker Morris is very similar to the game Nine Men's Morris, and is in the middle of Tic Tac Toe and Chess in terms of complexity. I developed an AI player using a modified Minimax alpha/beta algorithm which plays at a near perfect level (I have only managed to beat it in rare cases, it only takes one move that is not the perfectly optimal choice to guarantee a stalemate or loss!). For more information on the project, view the info section present in the HTML document of the game webpage (the site itself is currently down but the source code is viewable in my projects repository)."
    },
    projectMLFromScratch: {
    title: "Machine Learning From Scratch",
    link:  "https://github.com/asabramson/ml_from_scratch",
    text:  "This project contains various machine and deep learning architectures built from scratch. Helper libraries such as NumPy were used, however, libraries built specifically for machine learning were not utilized, as the purpose of this project is to act as an alternative to such libraries. The project is broken up into 3 parts, with the first being the implementation of 9 machine learning model architectures, the second being the implementation of neural networks and various layer types, and the third being a frontend web application which users can interact with the models using their own data to train and test."
    },
    projectAIEthics: {
    title: "Directed Independent Research in AI Ethics and Responsibility",
    link:  "empty.html",
    text:  "The following project contains research and a study conducted by myself, both centering around the ethical implications of Artificial Intelligence and why responsible AI is a necessity. The research section first looks into current events and issues involving AI, including its effect on the critical thinking skills of grade school children and the role it plays in scams targeted at the elderly. From here, various ethical concerns of AI are explored in more depth, which consist of an overreliance on AI, inaccuracies of AI caused by hallucination, privacy violations committed during the data collection process for training, and the presence of algorithmic bias in modern AI models. Each of these areas are examined on their exact causes, the effect they currently have on society, and possible solutions or strategies to mitigate their repercussions. To further investigate the level of ethicality present in modern AI systems, an experiment was conducted on three of the most popular large language models to test how they would react when given different philosophical and ethical dilemmas. This study found that while all three models performed better than expected, their reliability when it comes to ethical advice should still be taken with a grain of salt. Because of the existence of issues such as hallucination and algorithmic bias, AI should only be used as a means of obtaining a second opinion rather than a source of concrete evidence or advice regarding consequential ethical situations."
    },
    projectIQP: {
    title: "Smart Park Tech in Acadia National Park",
    link:  "https://github.com/asabramson/sensor-hat-transmission",
    text:  "I, along with three additional student researchers from Worcester Polytechnic Institute (WPI) worked with Acadia National Park to determine whether real-time data collection would be possible with the hope of improving park management and visitor experience. Currently, the park uses Jamar TRAX Apollyon GPS tube counters to survey traffic; these counters do not update live, a park ranger must travel to each counter in-person to download the data. While we were unsuccessful in processing the data on the Raspberry Pi devices (Jamar's propietary Windows-only software is required), we were able to transmit the data in a post-processed state (into a .csv). This project serves as a proof-of-concept; transmission of data is possible from a Raspberry Pi (in the case of this project: temperature, humidity, and pressure from a Waveshare Sense HAT B), if the park were to upgrade the traffic counters to a model that allows data processing on a Raspberry Pi, transmission from in the park to a visitor-accessible website (such as this one) is fully possible."
    },
    projectA1: {
    title: "Project A1: Placeholder Here",
    link:  "empty.html",
    text:  placeholderText
    },
    projectA2: {
    title: "Project A2: Placeholder Here",
    link:  "empty.html",
    text:  placeholderText
    },
    projectB1: {
    title: "Project B1: Placeholder Here",
    link:  "empty.html",
    text:  placeholderText
    },
    projectC1: {
    title: "Project C1: Placeholder Here",
    link: "empty.html",
    text: placeholderText
    }
};