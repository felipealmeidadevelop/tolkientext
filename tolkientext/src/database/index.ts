import { AppDataSource } from "./data-source"
import { Image } from "../entities/Image"

AppDataSource.initialize().then(async () => {
    console.log('😍🥰 Data source has been initialized')


}).catch(error => console.log("😥😥 Error during data source initialization " + error))
