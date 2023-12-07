import mongoose from "mongoose";
import fs from 'fs';

const fileUserNames = ['Usuarios1.txt', 'Usuarios2.txt', 'Usuarios3.txt', 'Usuarios4.txt', 'Usuarios5.txt', 'Usuarios6.txt' ]
const fileTaskNames = ['Tareas1.txt', 'Tareas2.txt', 'Tareas3.txt', 'Tareas4.txt', 'Tareas5.txt', 'Tareas6.txt' ]

export const replicationTxtFiles = async (tabla) => {
    try {
        console.log(tabla);
        if (tabla === "tasks"){
            console.log(tabla);
            console.log("variable collection = tasks");
            for (var i = 0; i < fileTaskNames.length; i++) {
                const collection = mongoose.connection.collection(tabla);
                const documents = await collection.find({}).toArray();
                const textData = JSON.stringify(documents, null, 2);
                const fileName = fileTaskNames[i];
                fs.writeFile(fileName, textData, (err) => {
                    if (err) throw err;
                });
            }
        }else {
            console.log(tabla);
            console.log("variable collection = users");
            for (var i = 0; i < fileUserNames.length; i++) {
                const collection = mongoose.connection.collection(tabla);
                const documents = await collection.find({}).toArray();
                const textData = JSON.stringify(documents, null, 2);
                const fileName = fileUserNames[i];
                fs.writeFile(fileName, textData, (err) => {
                    if (err) throw err;
                });
            }
        }
        //mongoose.connection.close();  
    } catch (error) {
        console.log(error);
    }
};

