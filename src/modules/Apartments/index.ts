export { default as Properties } from './components/Properties.tsx';
export { default as PropertyDetails } from './components/PropertyDetails.tsx';
export type { ApartmentProps } from './constants/AppartmentProps.tsx';
export { Card, Content, Details, Price, Image, Title } from './style/Card.tsx';
export { getApartments, createEditApartments, deleteApartment} from './api/apiApartments';