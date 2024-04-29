import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type product = {
    id: number,
    name: string,
    type_of_clothing: string,
    medium_description: string,
    long_description: string,
    price: number,
    quantity?: number
  }

  
export type RootStackParamList = {
    first: undefined;
    second: { titleOfNext: string }| undefined;
    third: { typeOfProduct: string } | undefined;
    fourth: { name: string } | undefined;
    fifth: undefined;
};

export type GridScreenProps = NativeStackScreenProps<
 
 RootStackParamList,
 
 "third"

>;

export type CategoryScreenProps = NativeStackScreenProps<
 
 RootStackParamList,
 
 "second"

>;

export type DetailScreenProps = NativeStackScreenProps<
 
 RootStackParamList,
 
 "fourth"

>;

export type GridParamList = {
    navigate: (
        screen: string,
        {typeOfProduct, productId, name}:{typeOfProduct: string, productId: number, name: string}
    ) => void
};

export type HeaderParamList = {
    navigate: (
        screen: string
    ) => void
};

export type CategoryParamList = {
    navigate: (
        screen:string,
        {titleOfNext}:{titleOfNext: string}
    ) => void
};

export type TypeParamList = {
    navigate: (
        screen:string,
        {typeOfProduct}:{typeOfProduct: string}
    ) => void
};
