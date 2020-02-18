export default (state = { environmentObjects: [], tiles: {}, newObject: {} }, action) => {
    switch (action.type) {

        case 'GENERATE_MAP_TILESET':
            let tileName = action.details.name
            let mapWidth = action.details[tileName].width
            let mapHeight = action.details[tileName].height
            let objectSize = action.details.objectSize
            let tiles = { ...state.tiles }
            tiles[tileName] = {
                height: mapHeight,
                width: mapWidth,
                layout: [],
            }
            let tile = tiles[tileName]
            for ( let row = 0; row < ( tile.height / objectSize ); row++ ) {
                let array = []
                for ( let column = 0; column < ( tile.width / objectSize ); column++ ) {
                    if ( row === 0 && column === 0 ) {
                        array.push( null )
                        continue
                    }
                    const randomNumber = Math.round(Math.random()*10)
                    if ( randomNumber < 4 )
                        array.push( null )
                    else if ( randomNumber < 6 )
                        array.push( 'T' )
                    else if ( randomNumber < 8 )
                        array.push( 'S' )
                    else
                        array.push( 'G' )
                }
                tiles[tileName].layout.push(array)
            }
            console.log( tiles )
            return {
                ...state,
                tiles: { ...tiles },
            }

        // case "GENERATE_OBJECT":
        //     console.log(action.properties)
        //     let newObj = action.properties
        //     let envObject = {
        //         name: newObj.name,
        //         imgUrl: newObj.image,
        //         position: {
        //             x: 0,
        //             y: 0,
        //         },
        //         size: {
        //             width: newObj.width,
        //             height: newObj.height,
        //         }
        //     }
        //     let objectsArray = [...state.environmentObjects, envObject]
        //     return {
        //         ...state,
        //         environmentObjects: objectsArray
        //     }

        case 'CLEAR_OBJECTS_LIST':
            return {
                ...state,
                environmentObjects: [],
            }

        case 'CLEAR_TILESETS':
            return {
                ...state,
                tiles: [],
            }

        default: return state
    }
}