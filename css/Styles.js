import { lightWhite } from "./Colors";

const appStyles = {
        TextInput: {
          color: "white"
        },
        headerContainer: {
          marginTop: 20,
          padding: 5    
        },
        headerText: {
          color: 'white',
          fontSize: 22,
          fontWeight: '500'
        },
        bodyText : {
            color: 'white',
            fontSize: 12,
        },
        input: {
            paddingTop: 10,
            padding: 15,
            fontSize: 12,
            color: 'white',
            marginBottom: 10
          },
        centered: {
          alignItems: 'center'
        },
        inputContainer: {
          marginTop: 40,
          paddingLeft: 15
        },
        inputPlaceHolder: {
          color: "white"
        },
        itemListTextStrike: {
          color: "white"
        },
      listContainer: {
        // width: width - 50,
        color: "white",
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: 'white',
        // height: width / 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        // ...Platform.select({
        //   ios: {
        //     shadowColor: 'rgb(50,50,50)',
        //     shadowOpacity: 0.8,
        //     shadowRadius: 2,
        //     shadowOffset: {
        //       height: 2,
        //       width: 0
        //     }
        //   },
        //   android: {
        //     elevation: 5
        //   }
        // })
      },
      column: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 0,
        // width: width / 1.5
      },
      text: {
        fontWeight: '500',
        fontSize: 16,
        marginVertical: 15,
        color: "blue"
      },
      circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 3,
        margin: 10
      },
      button: {
        marginRight: 10
      },
      list: {
        flex: 1,
        marginTop: 70,
        paddingLeft: 15,
        marginBottom: 10
      },
      scrollableList: {
        marginTop: 15
      }
    }
  ;
  export { appStyles };