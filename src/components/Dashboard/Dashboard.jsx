import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
ResponsiveContainer } from 'recharts';

const Dashboard = () => {

    const marksArray = [
        {
          "id": 1,
          "name": "Student 1",
          "physics": 85,
          "chemistry": 78,
          "math": 90
        },
        {
          "id": 2,
          "name": "Student 2",
          "physics": 70,
          "chemistry": 82,
          "math": 75
        },
        {
          "id": 3,
          "name": "Student 3",
          "physics": 92,
          "chemistry": 88,
          "math": 85
        },
        {
          "id": 4,
          "name": "Student 4",
          "physics": 80,
          "chemistry": 75,
          "math": 78
        },
        {
          "id": 5,
          "name": "Student 5",
          "physics": 88,
          "chemistry": 90,
          "math": 85
        },
        {
          "id": 6,
          "name": "Student 6",
          "physics": 75,
          "chemistry": 82,
          "math": 80
        },
        {
          "id": 7,
          "name": "Student 7",
          "physics": 90,
          "chemistry": 85,
          "math": 88
        },
        {
          "id": 8,
          "name": "Student 8",
          "physics": 78,
          "chemistry": 80,
          "math": 75
        },
        {
          "id": 9,
          "name": "Student 9",
          "physics": 85,
          "chemistry": 88,
          "math": 82
        },
        {
          "id": 10,
          "name": "Student 10",
          "physics": 92,
          "chemistry": 85,
          "math": 86
        },
        {
          "id": 11,
          "name": "Student 11",
          "physics": 87,
          "chemistry": 84,
          "math": 90
        },
        {
          "id": 12,
          "name": "Student 12",
          "physics": 83,
          "chemistry": 79,
          "math": 88
        }
      ]      

    
    return (
        <div>
            <LineChart
                width={1000} height={300} data={marksArray}
            >
                <Line dataKey= "physics"></Line>
                <Line stroke='#8884d8' dataKey= "chemistry"></Line>
                <Line dataKey= "math"></Line>
                <XAxis dataKey="name"/>
                <YAxis></YAxis>
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;