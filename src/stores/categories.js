import { initStore } from './store';

const actions = {
    SET_CATEGORIES: (globaState, categs) =>{
        return {
            categories: categs
        };
    }
};

export const ConfigCategorieStore = () => {
    initStore({categories: null }, actions);
}
