import {applyMiddleware, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import text from '../assets/images/text.svg'
import trip from '../assets/images/trip.svg'

let initialState = {
    news: [
        {id: 1, header: 'В Сан-Франциско разрешили беспилотные такси',
            text: 'На прошлой неделе Калифорнийская комиссия по комунальным услугам...', img:text, bg:'#FFE823'},
        {id: 2, header: 'В Крым вернулись розовые фламинго',
            text: 'Федеральная служба по ветеринарному и фитосанитарному надзору...', img:trip, bg:'#FF7686'},
        {id: 3, header: 'В Тюменской области высадят 16 миллионов саженцев хвойных деревьев',
            text: 'В Тюменской области в рамках реализации проекта "Сохранение лесов"...', img:text, bg:'#21AB7D'},
        {id: 4, header: 'Британские ученые разгадали тайну очарования котиков',
            text: '"Во первых - пушистость" - поделился ученый. Во вторых...', img:trip, bg:'#FFC98B'},
        {id: 5, header: 'Букеровсую премию впервые получил автор на хинди',
            text: 'На протяжении двух десятилетий Международная Букеровская...', img:text, bg:'#751102'},
        {id: 6, header: 'Математика поможет сократить пробки',
            text: 'Дорожное движение является серьезной проблемой для большинства...', img:trip, bg:'#5D7599'},
        {id: 7, header: 'НАСА работает над созданием дифракционного солнечного паруса',
            text: 'Проект НАСА по разработке нового солнечного паруса перешел к ...', img:text, bg:'#108CC6'},
        {id: 8, header: 'Найден самый большой вид летающих рептилий',
            text: 'Аргентинские ученые нашли самый большой вид летающих рептилий, ...', img:trip, bg:'#3F7856'}
    ] as Array<NewsType>,
    isAuth: false,

}

export type InitialStateType = typeof initialState

const REDUX = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'TR/LOGIN':
            return {
                ...state,
                isAuth: true
            }
        case 'TR/LOGOUT':
            return {
                ...state,
                isAuth: false
            }
        default:
            return state;
    }
}

//ACTION
type ActionsType = InferActionsType<typeof actions>

export const actions = {
    login: () => ({type: 'TR/LOGIN'} as const),
    logout: () => ({type: 'TR/LOGOUT'} as const)
}

// TYPES
export type NewsType = {
    id: number
    header: string
    text: string
    img: string
    bg: string
}

//STORE
type RootReducerType = typeof REDUX;
export type AppStateType = ReturnType<RootReducerType>;
export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
const store = createStore(REDUX, compose(applyMiddleware(thunkMiddleware)))

export default store