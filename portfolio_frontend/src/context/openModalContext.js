import { createContext } from "react";

const openModalContext = createContext({
    openModal: false,
    setOpenModal: (openModal) => { },
    thumbnail: null,
    setThumbnail: (thumbnail) => { },
    title: null,
    setTitle: (title) => { },
    text: null,
    setText: (text) => { },
    view: null,
    setView: (view) => { },
    source: null,
    setSource: (source) => { },
    projectId: null,
    setProjectId: (projectId) => { },
});


export default openModalContext;