import { Image, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import MapPreview from "../components/MapPreview";
import CustomButton from "./../components/CustomButton.jsx";
import { commonStyles } from '../global/commonStyles';

const MyProfile = ({ navigation }) => {
    const { profileImage, imageCamera } = useSelector((state) => state.authReducer.value);
    const {location} = useSelector((state) => state.authReducer.value);
    const {user} = useSelector((state) => state.authReducer.value);

    return (
        <View style={commonStyles.headerContainer}>
            <View style={commonStyles.container}>
                <Text style={commonStyles.text}>{user}</Text>
                {profileImage || imageCamera ? (
                <View style={commonStyles.columnContainer}>
                    <Image
                        source={{ uri: profileImage || imageCamera }}
                        resizeMode="cover"
                        style={commonStyles.profileImage}
                        />
                    <CustomButton
                        title="Cambiar foto de Perfil"
                        onPress={() => navigation.navigate("Image Selector")}
                    />
                </View>
                ) : (
                <View style={commonStyles.columnContainer}>
                    <Image
                        source={require("../../assets/defaultProfile.png")}
                        style={commonStyles.profileImage}
                        resizeMode="cover"
                    />
                    <CustomButton
                        title="Agregar Foto de Perfil"
                        onPress={() => navigation.navigate("Image Selector")}
                    />
                </View>
                )}
                {location ? (
                <View style={commonStyles.columnContainer}>
                    <MapPreview location={ location } />
                    <CustomButton
                        title="Cambiar Direccion"
                        onPress={() => navigation.navigate("Location Selector")}
                    />
                </View>
                ) : (
                <View>
                    <CustomButton
                        title="Direccion"
                        onPress={() => navigation.navigate("Location Selector")}
                    />
                </View>
                )}
            </View>
        </View>
    );
};

export default MyProfile;
