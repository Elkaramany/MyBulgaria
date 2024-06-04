import { useDispatch, useSelector } from 'react-redux';
import { PropertiesState, PropertyType, onChangePropertiesState, resetPropertiesState } from './index'; // Adjust the path to your action creators

export const usePropertiesActions = () => {
    const dispatch = useDispatch();
    const { loading, properties } = useSelector((state: { properties: PropertiesState }) => state.properties);

    const setPropertiesState = ({ prop, value }: { prop: keyof PropertiesState; value: string | boolean | number | PropertyType[] }) => {
        dispatch(onChangePropertiesState({ prop, value }));
    };

    const setProperties = (value: PropertyType[]) => {
        dispatch(onChangePropertiesState({ prop: 'properties', value }));
    }

    const switchPropertiesLoader = (value: boolean) => {
        dispatch(onChangePropertiesState({ prop: 'loading', value }));
    }

    const onResetPropertiesState = () => {
        dispatch(resetPropertiesState());
    };

    return {
        setPropertiesState,
        switchPropertiesLoader,
        onResetPropertiesState,
        properties,
        setProperties,
        loading
    };
};