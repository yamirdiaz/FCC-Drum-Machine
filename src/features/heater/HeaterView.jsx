import { useSelector, useDispatch } from "react-redux"
import React, { useState, useRef, useEffect } from "react"
import { setHeaterSound, setPianoSound } from "./heaterSlice"
import "../../App.css"


export const HeaterView = () => {
const state = useSelector(state => state.heater);

const [typeInstrument, setTypeInstrument] = useState(state.titleBase)
const [dispplayName, setDisplayName] = useState(typeInstrument)
const [ styleSwitch, setStyleSwitch ] = useState({"margin-left": 0})

const dispatch = useDispatch();


const audioRefQ = useRef(null);
const audioRefW = useRef(null);
const audioRefE = useRef(null);
const audioRefA = useRef(null);
const audioRefS = useRef(null);
const audioRefD = useRef(null);
const audioRefZ = useRef(null);
const audioRefX = useRef(null);
const audioRefC = useRef(null);

const audioReference = [
    audioRefQ ,
    audioRefW ,
    audioRefE ,
    audioRefA ,
    audioRefS ,
    audioRefD ,
    audioRefZ ,
    audioRefX ,
    audioRefC ,
]


    


const maxVolume = 20;


const handleKeyDown = (event) => {
    const pressKey = event.key;

    switch (pressKey.toUpperCase()) {
        case "Q":
            handleClickQ();
            break;
        case "W":
            handleClickW();
            break;
        case "E":
            handleClickE();
            break;
        case "A":
            handleClickA();
            break;
        case "S":
            handleClickS();
            break;
        case "D":
            handleClickD();
            break;
        case "Z":
            handleClickZ();
            break;
        case "X":
            handleClickX();
            break;
        case "C":
            handleClickC();
            break;
        
        default:
            break;
    }
}


const handleClickQ = () => {
    const index = 0;
    setDisplayName(state.pads[index].name);
    audioRefQ.current.play();
    
}

const handleClickW = () => {
    
    setDisplayName(state.pads[1].name);
    audioReference[1].current.play();
}

const handleClickE = () => {
    
    setDisplayName(state.pads[2].name);
    audioRefE.current.play();
}

const handleClickA = () => {
    
    setDisplayName(state.pads[3].name);
    audioRefA.current.play();
}

const handleClickS = () => {
    
    setDisplayName(state.pads[4].name);
    audioRefS.current.play();
}

const handleClickD = () => {
    
    setDisplayName(state.pads[5].name);
    audioRefD.current.play();
}

const handleClickZ = () => {
    
    setDisplayName(state.pads[6].name);
    audioRefZ.current.play();
}

const handleClickX = () => {
    
    setDisplayName(state.pads[7].name);
    audioRefX.current.play();
}

const handleClickC = () => {
    
    setDisplayName(state.pads[8].name);
    audioRefC.current.play();
}

const handleSwitch = () => {
    if (state.titleBase === "Heater Kit") {
        dispatch(setPianoSound());
        setTypeInstrument(state.titleBase);
        setDisplayName("Piano Kit")
        setStyleSwitch({"margin-left": 15})
    } 
    
    if (state.titleBase === "Piano Kit") {
        dispatch(setHeaterSound());
        setTypeInstrument(state.titleBase);
        setDisplayName("Heater kit");
        setStyleSwitch({"margin-left": 0})
    }
    return
}

const handleVolume = (event) => {
    const { value } = event.target ;
    const volume = Number(value) / maxVolume;
    audioRefA.current.volume = volume;
    audioRefC.current.volume = volume;
    audioRefD.current.volume = volume;
    audioRefE.current.volume = volume;
    audioRefQ.current.volume = volume;
    audioRefS.current.volume = volume;
    audioRefW.current.volume = volume;
    audioRefX.current.volume = volume;
    audioRefZ.current.volume = volume;
}

const fuctionRef = [
    handleClickQ,
    handleClickW,
    handleClickE,
    handleClickA,
    handleClickS,
    handleClickD,
    handleClickZ,
    handleClickX,
    handleClickC
]

const padsInfo = state.pads.map((pad, index) => <button className="drum-pad" key={`key-${pad.title}`} id={`drum-pad-${pad.title}`} onClick={fuctionRef[index]}>{pad.title}<audio key={`audio-key-${pad.title}`} className="clip" ref={audioReference[index]} id={pad.title} src={pad.src}/></button>);


    return (
        <div id="drum-machine" onKeyDown={ (event) => handleKeyDown(event)} >
            <div className="drum-pad-wrapper" >
                {padsInfo ? padsInfo : `Se ha producio un error...`}
                
            </div>
            <div id="display-wrapper">
                <div id="display">{dispplayName}</div>
                <input 
                type="range" 
                name="volume-control" 
                id="volume-input" 
                onChange={ (e) => handleVolume(e)}
                min={0}
                max={maxVolume}
                />
                <div className="switch-wrapper">
                    <p className="bank-text">Bank</p>
                    <button className="switch-btn" onClick={handleSwitch}>
                        <div className="switch" style={styleSwitch} ></div>
                    </button>                    
                </div>
                    

            </div>

        </div>
    )
}