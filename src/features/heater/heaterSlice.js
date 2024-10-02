import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    titleBase: "Heater Kit",
    img:"https://st5.depositphotos.com/74856820/69339/v/450/depositphotos_693390812-stock-illustration-vector-design-snare-drum.jpg",
    pads: [
        {
            title: "Q",
            name: "Heater 1",
            src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
        },
    
        {
            title: "W",
            name: "Heater 2",
            src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
        },
    
        {
            title: "E",
            name: "Heater 3",
            src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
        },
    
        {
            title: "A",
            name: "Heater 4",
            src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
        },
    
        {
            title: "S",
            name: "Clap",
            src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
        },
    
        {
            title: "D",
            name: "Open-HH",
            src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
        },
    
        {
            title: "Z",
            name: "Kick-n'-Hat",
            src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
        },
    
        {
            title: "X",
            name: "Kick",
            src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
        },
    
        {
            title: "C",
            name: "Closed-HH",
            src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
        }
    ],

    
    
}

const HeaterSlice = createSlice({
    name: "Heater",
    initialState,
    reducers: {
        setHeaterSound: (state) => {
            state.titleBase = "Heater Kit";
            state.img = "https://st5.depositphotos.com/74856820/69339/v/450/depositphotos_693390812-stock-illustration-vector-design-snare-drum.jpg";
            
            const newPads = [
                {
                    title: "Q",
                    name: "Heater 1",
                    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
                },
            
                {
                    title: "W",
                    name: "Heater 2",
                    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
                },
            
                {
                    title: "E",
                    name: "Heater 3",
                    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
                },
            
                {
                    title: "A",
                    name: "Heater 4",
                    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
                },
            
                {
                    title: "S",
                    name: "Clap",
                    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
                },
            
                {
                    title: "D",
                    name: "Open-HH",
                    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
                },
            
                {
                    title: "Z",
                    name: "Kick-n'-Hat",
                    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
                },
            
                {
                    title: "X",
                    name: "Kick",
                    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
                },
            
                {
                    title: "C",
                    name: "Closed-HH",
                    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
                }
            ];    
            newPads.map(({title, name, src}, index) => {
                const padToUpdate = state.pads.find(pad => pad.title === title)

                if (padToUpdate) {
                    padToUpdate.name = name
                    padToUpdate.src = src
                }
            })                  
            
            
            

        },
        setPianoSound: (state) => {
            state.titleBase = "Piano Kit";
            state.img = "https://illustoon.com/photo/10889.png";  
            const newPads = [
                {
                    title: "Q",
                    name: "Chord 1",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
                },
            
                {
                    title: "W",
                    name: "Chrod 2",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
                },
            
                {
                    title: "E",
                    name: "Chrod 3",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
                },
            
                {
                    title: "A",
                    name: "Give us Light",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
                },
            
                {
                    title: "S",
                    name: "Dry Ohh",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
                },
            
                {
                    title: "D",
                    name: "Bld H1",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
                },
            
                {
                    title: "Z",
                    name: "Punchy Kick",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
                },
            
                {
                    title: "X",
                    name: "Side Stick",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
                },
            
                {
                    title: "C",
                    name: "Brk Snr",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
                }
            ];    
            newPads.map(({title, name, src}, index) => {
                const padToUpdate = state.pads.find(pad => pad.title === title)

                if (padToUpdate) {
                    padToUpdate.name = name
                    padToUpdate.src = src
                }
            })


        },
    }
})


export default HeaterSlice.reducer
export const { setHeaterSound, setPianoSound } = HeaterSlice.actions