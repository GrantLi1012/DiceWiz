import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '../../customHooks/useMediaQuery';
import * as styles from './Home.css';
import dice from '../../img/dice-row.png';
import Button from 'react-bootstrap/Button';
import { strings } from '../../staticAsset/strings';

export const Home = (): JSX.Element => {
    const navigate = useNavigate();
    var expanded = useMediaQuery("(min-width: 768px)");

    return (
        <div style={styles.mainPageContainer}>
            <div style={styles.title}> {strings.appName} </div>
            <div style={styles.text}> {strings.home.welcomeMessage} </div>
            <div style={styles.text}> {strings.home.appDescriptionLine1} </div>
            <div style={styles.text}> {strings.home.appDescriptionLine2} </div>
            <br></br>
            <div style={styles.buttonsContainer(expanded)}>
                <Button variant="outline-dark" size="lg" style={styles.startButton} onClick={()=>{navigate('/dice-roller')}} >
                    {strings.titles.diceRoller}
                </Button>
                <Button variant="outline-dark" size="lg" style={styles.startButton} onClick={()=>{navigate('/ability-check')}} >
                    {strings.titles.abilityCheck}
                </Button>
                <Button variant="outline-dark" size="lg" style={styles.startButton} onClick={()=>{navigate('/damage-calculator')}} >
                    {strings.titles.damageCalculator}
                </Button>
                <Button variant="outline-dark" size="lg" style={styles.startButton} onClick={()=>{navigate('/damage-calculator-spell-save')}} >
                    {strings.titles.damageSpellSave}
                </Button>
                <Button variant="outline-dark" size="lg" style={styles.startButton} onClick={()=>{navigate('/average-calculator')}} >
                    {strings.titles.averageCalculator}
                </Button>
                </div>
            <div style={styles.diceImage}>
                <img src={dice} alt="dice-row" style={styles.diceImage}/>
            </div>
        </div>
    );
};