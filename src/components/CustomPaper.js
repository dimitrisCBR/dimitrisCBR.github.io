import React from 'react';
import { Card, CardContent, Paper, Typography, useTheme } from '@material-ui/core';

const CustomPaper = () => {
  const theme = useTheme();

  return (
    <Card raised >
      <CardContent>
        <Typography variant="h6" color={theme.palette.text.primary}>
          Hello
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CustomPaper;