import React from 'react';

// Components
import PageLayout from '../components/layout/PageLayout';
import Tasks from '../components/tasksView/Tasks';
import Timer from '../components/timerView/Timer';

const MyGoals = () => {
    return <PageLayout left={<Tasks />} right={<Tasks />}></PageLayout>;
};

export default MyGoals;
