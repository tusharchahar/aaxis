import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CategoryNavigate from '../components/CategoryNavigate';

function HomeScreen(){

    return (
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View style = {styles.root}>
            <View style = {styles.first}>
                <View style = {styles.heading}>
                    <Text style = {styles.title}>Bestsellers and popular items</Text>
                </View>
                <View style = {styles.options}>
                <ScrollView 
                    horizontal = {true} 
                    contentContainerStyle = {{gap: 16, paddingBottom:5, paddingHorizontal:20}} 
                    bounces = {false}
                    showsHorizontalScrollIndicator = {false}
                >
                        <View style = {styles.outer}>
                            <View style = {styles.box}></View>
                            <View><Text style = {styles.detail}>Summer Sale 20% off</Text></View>
                        </View>
                        <View style = {styles.outer}>
                            <View style = {styles.box}></View>
                            <View><Text style = {styles.detail}>Running products</Text></View>
                        </View>
                        <View style = {styles.outer}>
                            <View style = {styles.box}></View>
                            <View><Text style = {styles.detail}>Visit Gym in styles</Text></View>
                        </View>
                        <View style = {styles.outer}>
                            <View style = {styles.box}></View>
                            <View><Text style = {styles.detail}>Festival specials</Text></View>
                        </View>
                        <View style = {styles.outer}>
                            <View style = {styles.box}></View>
                            <View><Text style = {styles.detail}>Summer Sale 20% off</Text></View>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style = {styles.second}>
                <CategoryNavigate value='New release'></CategoryNavigate>
                <CategoryNavigate value='Clothing'></CategoryNavigate>
                <CategoryNavigate value='Accessories'></CategoryNavigate>
                <CategoryNavigate value='Products on sale'></CategoryNavigate>
                <CategoryNavigate value='New release'></CategoryNavigate>
            </View>
            <View style = {styles.first}>
                <View style = {styles.heading}>
                    <Text style = {styles.title}>Upcoming and new products</Text>
                </View>
                <View style = {styles.options}>
                <ScrollView 
                    horizontal = {true} 
                    contentContainerStyle = {{gap: 16, paddingBottom:5, paddingHorizontal:20}} 
                    bounces = {false}
                    showsHorizontalScrollIndicator = {false}
                >
                        <View style = {styles.outer}>
                            <View style = {styles.box3}></View>
                            <View>
                                <Text style = {styles.detail2}>VelocityStride</Text>
                                <Text style = {styles.price}>$99.99</Text>
                            </View>
                        </View>
                        <View style = {styles.outer}>
                            <View style = {styles.box3}></View>
                            <View>
                                <Text style = {styles.detail2}>AeroRunners</Text>
                                <Text style = {styles.price}>$74.99</Text></View>
                            </View>
                        <View style = {styles.outer}>
                            <View style = {styles.box3}></View>
                            <View>
                                <Text style = {styles.detail2}>Endurance</Text>
                                <Text style = {styles.price}>$124.99</Text>
                            </View>
                        </View>
                        <View style = {styles.outer}>
                            <View style = {styles.box3}></View>
                            <View>
                                <Text style = {styles.detail2}>Cooling Towels</Text>
                                <Text style = {styles.price}>$89.99</Text>
                            </View>
                        </View>
                        <View style = {styles.outer}>
                            <View style = {styles.box3}></View>
                            <View>
                                <Text style = {styles.detail2}>Hydration</Text>
                                <Text style = {styles.price}>$69.99</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style = {styles.first}>
                <View style={styles.heading}>
                    <Text style={styles.title}>Summer Sale</Text>
                </View>
                <View style={styles.options}>
                <ScrollView 
                    horizontal = {true} 
                    contentContainerStyle = {{gap: 16, paddingBottom:5, paddingHorizontal:20}} 
                    bounces = {false}
                    showsHorizontalScrollIndicator = {false}
                >
                        <View style = {styles.outer}>
                            <View style = {styles.box}></View>
                            <View>
                                <Text style = {styles.detail2}>Beach Volleyball Set</Text>
                                <Text style = {styles.price}>$9.99</Text>
                            </View>
                        </View>
                        <View style = {styles.outer}>
                            <View style = {styles.box}></View>
                            <View>
                                <Text style = {styles.detail2}>Cooling Towels</Text>
                                <Text style = {styles.price}>$14.99</Text>
                            </View>
                        </View>
                        <View style = {styles.outer}>
                            <View style = {styles.box}></View>
                            <View>
                                <Text style = {styles.detail2}>UV-Protective Sunglasses</Text>
                                <Text style = {styles.price}>$8.99</Text>
                            </View>
                        </View>
                        <View style = {styles.outer}>
                            <View style = {styles.box}></View>
                            <View>
                                <Text style = {styles.detail2}>Running Belt</Text>
                                <Text style = {styles.price}>$9.99</Text>
                            </View>
                        </View>
                        <View style = {styles.outer}>
                            <View style = {styles.box}></View>
                            <View>
                                <Text style = {styles.detail2}>Gloves</Text>
                                <Text style = {styles.price}>$12.99</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style = {styles.button2}>
                <Text style = {styles.detail2}>View all</Text>
            </View>
          </View>
        </ScrollView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    root: {
      paddingVertical: 20,
      backgroundColor: 'white',
      height:'100%',
      overflow:'visible'
    },
    first:{
        width:'100%',
        marginBottom:20
    },
    second:{
        gap:10,
        paddingHorizontal:20,
        flexDirection:'column',
        width:'100%',
        marginBottom:25,
        overflow:'visible'
    },
    heading:{
        paddingHorizontal:20,
        paddingBottom:15
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    options:{
        overflow:'visible',
    },
    outer:{
        width:140,
        gap:10
    },
    box:{
        width:135,
        height:135,
        backgroundColor:'#BABECC',
        borderRadius: 6,
        elevation:4,
        overflow:'hidden'
    },
    box3:{
        backgroundColor:'#DFE2E8',
        width:135,
        height:135,
        borderRadius: 6,
        elevation:4,
        overflow:'hidden'
    },
    slab:{
        padding:10,
        backgroundColor:'orange',
    },
    detail:{
        fontSize:15,
    },
    detail2:{
        fontSize:15,
        fontWeight:'bold'
    },
    price:{
        marginTop: 5
    },
    button2:{
        padding:15,
        marginHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#DFE2E8',
        borderRadius: 10,
    }
  });