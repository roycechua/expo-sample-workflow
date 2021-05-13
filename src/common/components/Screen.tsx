import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Screen = (props : any) => {
    // custom props
    let center = null;
    if(props.center) {
        center = {justifyContent: 'center', alignItems: 'center'}
    }

    return (
        <View style={{...styles.container, ...center, ...props.styles}}>
            {props.children}
        </View>
    )
}

export default Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
