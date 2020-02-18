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
                tile.layout.push([])
                for ( let column = 0; column < ( tile.width / objectSize ); column++ ) {
                    if ( row === 0 && column === 0 ) {
                        tile.layout[row].push( null )
                        continue
                    }
                    const randomNumber = Math.round(Math.random()*1)
                    if ( randomNumber === 0 )
                        tile.layout[row].push( null )
                    else
                        tile.layout[row].push( 'T' )
                }
            }
            console.log( tiles )
            return {
                ...state,
                tiles: { ...tiles },
            }

        case "GENERATE_OBJECT":
            let treeStump = {
                name: 'tree stump',
                imgUrl: 'tree_sprites.png',
                position: {
                    x: 0,
                    y: 0,
                },
                size: {
                    width: 40,
                    height: 30,
                }
            }
            let objectsArray = [...state.environmentObjects, treeStump]
            return {
                ...state,
                environmentObjects: objectsArray
            }

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