import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=1000';


type PhotoItem = {
    id: number;
    title: string;
};

export default function FlatListFetch(){

    const [data, setData] = useState<PhotoItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    return (
        <FlatList
        data={data}
        keyExtractor={(item : PhotoItem) => item.id.toString()}
        // Callback disparado quando os itens visíveis mudam
        onViewableItemsChanged={({ viewableItems, changed }) => {
          console.log("Itens visíveis", viewableItems.map(item => item.key));
          console.warn("Itens alterados", changed.map(item => item.key));
        }}
        renderItem={({ item }) => (
          // View que será renderizada para cada item
          <View>
            <Text numberOfLines={2}>
            {item.id}: {item.title}
            </Text>
        </View>
        )}
      />
    )
}

