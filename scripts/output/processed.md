$$
IF1 (F_StAUsed =1) \\
m_1^A={\left(Y_{AB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet Z_{AI}\right); \\
m_2^A={\left(X_{AB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet Z_{AI}\right); \\
m_3^A={\left(Z_{AB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet X_{AI}\right); \\
m_4^A={\left(Y_{AB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet X_{AI}\right); \\
ENDIF1 \\
IF1 (F_StBUsed =1) \\
m_1^B={\left(Y_{BB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet Z_{BI}\right); \\
m_2^B={\left(X_{BB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet Z_{BI}\right); \\
m_3^B={\left(Z_{BB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet X_{BI}\right); \\
m_4^B={\left(Y_{BB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet X_{BI}\right); \\
ENDIF1 \\
IF1 (F_StCUsed =1) \\
m_1^C={\left(Y_{CB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet Z_{CI}\right); \\
m_2^C={\left(X_{CB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet Z_{CI}\right); \\
m_3^C={\left(Z_{CB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet X_{CI}\right); \\
m_4^C={\left(Y_{CB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet X_{CI}\right); \\
ENDIF1 \\
IF1 (F_StFUsed =1) \\
m_1^F={\left(Y_{FB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet Z_{FI}\right); \\
m_2^F={\left(X_{FB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet Z_{FI}\right); \\
m_3^F={\left(Z_{FB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet X_{FI}\right); \\
m_4^F={\left(Y_{FB}^2\right)}^T\bullet \left(q2DCM\left(\widehat{\bar{q}}\right)\bullet X_{FI}\right); \\
ENDIF1
$$