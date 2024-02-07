import React from 'react'

function Mystatus() {
    const MyStatus = styled(Box)`
        background:#d7d7d7;
        display:flex;
        width:100%;
        height:5rem;
    `
  return (
    <>
        <MyStatus>
            <ListItem>
                <LogoImg src={Portfolio} draggable='false' alt="dp" />
                <LiContent>
                    <Box>
                        <Name>My Status</Name>
                        <UpdateTiem>
                            <Typography>
                                today at 12:01 am
                            </Typography>
                        </UpdateTiem>
                    </Box>
                </LiContent>
            </ListItem>
        </MyStatus>
    </>
  )
}

export default Mystatus