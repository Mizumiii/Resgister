import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Worker } from "../../models/Worker";
import WorkerCard from "./WorkerCard";

interface IProps {
    workers: Array<Worker>;
    isRow: boolean;
}


export default function WorkerList(props: IProps) {
    const { workers, isRow } = props;
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            style={[styles.container, isRow && { flexDirection: 'row' }]}
            horizontal={isRow}
            scrollEnabled={isRow}
        >
            {workers && workers.map((worker: Worker, index: number) => (
                <WorkerCard
                    key={index.toString()}
                    worker={worker}
                    style={isRow ?
                        { marginLeft: index === 0 ? 0 : 10 }
                        :
                        { marginTop: index === 0 ? 0 : 10 }
                    }
                    isRow={isRow}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        overflow: 'hidden'
    }
});