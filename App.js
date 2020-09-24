import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Button } from 'react-native';
// import { AsyncStorage } from 'react-native';
import { primaryGradientArray } from './css/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from './components/Header/Header';
import { SubTitle } from './components/SubTitle';
import Todo from './components/Todo';
import { ScrollView } from 'react-native-gesture-handler';
// import uuid from 'uuid/dist/v1';

import { appStyles } from './css/Styles';

export default function App() {
  
    const styles = appStyles;
    const headerTitle = 'Lots to do!';
    const bodyText = "Simple Todo practice App";
    const subtitle = "Subtitle";

    const [toDos, setToDos] = useState([
      {
        text: "Learn more about React",
        isCompleted: false
      },
      {
        text: "Learn more about Backend",
        isCompleted: false
      },
      {
        text: "Learn more about Everything",
        isCompleted: false
      },
    ]);

    const addTodo = text => {
      const newTodos = [...toDos, { text }];
      setToDos(newTodos);
    }

    const completeTodo = index => {
      const newTodos = [...toDos];
      newTodos[index].isCompleted = true;
      setToDos(newTodos)
    };

    const removeTodo = index => {
      const newTodos = [...toDos];
      newTodos.splice(index, 1);
      setToDos(newTodos);
    }

    return (
      <LinearGradient colors = { primaryGradientArray } style={ styles.container }>
        <StatusBar barStyle = "light-content" />
        <View style = { styles.centered }>
          <Header title = { headerTitle } bodyText={ bodyText }/>
          <SubTitle subtitle = { subtitle } />
          <View>
            { toDos.map((todo, index) => (
              <Todo 
                key = { index }
                index = { index }
                todo = { todo }
                completeTodo = { completeTodo }
                removeTodo = { removeTodo }
              />
            ))}
          </View>
        </View>

        
      </LinearGradient>
    );
  }
        
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


//legacy

// const newInputValue = (value) => {
    //   setItem({
    //     inputValue: value
    //   });
    // }

    // const loadingItems = async () => {
    //   try {
    //     const allItems = await AsyncStorage.getItems('ToDos');
    //     setItem({
    //       loadingItems: true,
    //       allItems: JSON.parse(allItems) || {}
    //     });
    //   } catch (error){
    //     console.log(error)
    //   }
    // };

    // const onDoneAddItem = () => {
    //   const { inputValue } = item;
    //   if (inputValue !== ''){
    //     setItem(prevState => {
    //       const id = uuid;
    //       const newItemObject = {
    //         [id]: {
    //           id,
    //           isCompleted: true,
    //           text: inputValue,
    //           createdAt: Date.now()
    //         }
    //       };
    //       const newState = {
    //         ...prevState,
    //         inputValue: '',
    //         allItems: {
    //           ...prevState.allItems,
    //           ...newItemObject
    //         }
    //       };
    //       setItem(newState.allItems)
    //       console.log({...newState})
    //       return {...newState}
    //     })
    //   }
    // }

    // const deleteItem = (id) => {
    //   setItem(prevState => {
    //     const allItems = prevState.allItems;
    //     delete allItems(id);
    //     const newState = {
    //       ...prevState,
    //       ...allItems
    //     };
    //     saveItems(newState.allItems)
    //     return { ...newState }
    //   });
    // };

    // const completeItem = (id) => {
    //   setItem(prevState => {
    //     const newState = {
    //       ...prevState,
    //       allItems: {
    //         ...prevState.allItems,
    //         [id]: {
    //           ...prevState.allItems[id],
    //           isCompleted: true
    //         }
    //       }
    //     };
    //     console.log(newState.allItems)
    //     saveItems(newState.allItems);
    //     return ({ ...newState })
    //   })
    // }

    // const incompleteItem = (id) => {
    //   setItem(prevState => {
    //     const newState = {
    //       ...prevState,
    //       allItems: {
    //         ...prevState.allItems,
    //         [id]: {
    //           ...prevState.allItems[id],
    //           isCompleted: false
    //         }
    //       }
    //     };
    //     saveItems(newState.allItems);
    //     return { ...newState }
    //   });
    // };

    // const deleteAllItems = async () => {
    //   try {
    //     await AsyncStorage.removeItem('ToDos');
    //     setItem({ allItems: {} });
    //   } catch(error){
    //     console.log('error')
    //   }
    // };

    // const saveItems = newItem => {
    //   console.log('new Item', newItem)
    //   // const saveItem = AsyncStorage.setItem('ToDos', JSON.stringify(newItem));
    // }


    //markup

    // <View style = { styles.inputContainer }>
    //       <SubTitle subtitle = "Subtitle" />
    //       <Input inputValue = { item.inputValue} 
    //             onChangeText = { newInputValue } 
    //             onDoneAddItem = { onDoneAddItem }
    //       />
    //       <View style={styles.Button}>
    //       <Button onPress = { onDoneAddItem } title = "Save Item" />
    //     </View>
    //     </View>  
    //     <View style = { styles.list }>
    //       <View style = { styles.column }>
    //         <SubTitle subtitle = { 'Recent Notes' } />
    //         <View style = { styles.deleteAllButton } >
    //           <Button deleteAllItems = { deleteAllItems } title = "Delete All Items" />
    //         </View>
    //       </View>
    //         { loadingItems ? (
    //           <ScrollView contentContainerStyle = { styles.scrollableList } >
    //             { 
    //               // console.log('val', loadingItems)
    //               Object.values(loadingItems)
    //                 .reverse()
    //                 .map(item => {
    //                   <List 
    //                     key = { item.id }
    //                     { ...item }
    //                     deleteItem = { deleteItem }
    //                     completeItem = { completeItem }
    //                     incompleteItem = { incompleteItem }
    //                   />
    //                 })
    //             }
    //           </ScrollView> 
    //           ) : (
    //             <ActivityIndicator size = "large" color = "white" />
    //           ) 
    //         }
    //     </View>