import React from 'react';
import CriarLogin from './src/assets/CadastroView';
import CadastroProduto from './src/screens/CadastroProduto';
import CadastroCliente from './src/screens/CadastroCliente';
import Cardapio from './src/assets/Cardapio';
import Carrinho from './src/screens/Carrinho';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

const Stack = createStackNavigator();


function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Cardapio' component={Cardapio} 
        options={{headerShown: false}}/>

        <Stack.Screen name='CriarLogin' component={CriarLogin}
        options={{headerShown: false}}/>
        <Stack.Screen name='Carrinho' component={Carrinho}
        options={{headerShown: false}}/>

        <Stack.Screen name='CadastroProduto' component={CadastroProduto}
        options={{headerShown: false}}/>
        <Stack.Screen name='CadastroCliente' component={CadastroCliente}
        options={{headerShown: false}}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;