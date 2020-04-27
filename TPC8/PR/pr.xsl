<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:result-document href="pr.html">
            <xsl:apply-templates/>
        </xsl:result-document>
        
    </xsl:template>
    
    <xsl:template match="meta">
        
        <html>
            <head>
                <title>Project Record</title>
                <meta charset="UTF-8"/>
            </head>
            <body>
                
                <h1 align="center">Project Record</h1>
                
                <table style="float: left" width="50%">
                    
                    <tr>
                        <th>Keyname:</th><td><xsl:value-of select="keyname"/></td>                                 
                    </tr>
                    <tr>
                        <th>Title:</th><td><xsl:value-of select="title"/></td>
                    </tr>
                    <tr>
                        <th>Subtitle:</th><td><xsl:value-of select="subtitle"/></td>
                    </tr>
                    <tr>
                        <th>Begin Date:</th><td><xsl:value-of select="bdate"/></td>
                    </tr>
                    <tr>
                        <th>End Date:</th><td><xsl:value-of select="edate"/></td>
                    </tr>
                    
                </table>
                <table style="float: left" width="50%" >
                    <tr>
                        <th width="50%">Supervisor</th>
                    </tr>
                    <tr>
                        <th>Supervisor Name:</th><td><xsl:value-of select="supervisor/name"/></td> 
                    </tr>
                    <tr>
                        <th>Email:</th>
                        <td><xsl:value-of select="supervisor/email"/></td>
                    </tr>
                    <tr>
                        <th>Homepage:</th>
                        <td>
                            <xsl:variable name="homepage" select="supervisor/homepage"/>
                            <a href="{$homepage}"><xsl:value-of select="supervisor/homepage"/></a>
                        </td>
                    </tr> 
                    <tr>
                        <td><br/></td>
                    </tr>
                </table>
                
                <h2 align="left">Workteam</h2>
                
                <xsl:apply-templates select="workteam/member"/>
                <xsl:apply-templates select="abstract"/>
                <xsl:apply-templates select="deliverable"/>
                
            </body>
        </html>
        
    </xsl:template>
    
    
    
    <xsl:template match="workteam/member">
        
        
        <table style="float: left" width="50%" border="1">
            
            <tr>
                <th>Identifier:</th><td><xsl:value-of select="identifier"/></td>                                 
            </tr>
            <tr>
                <th>Name:</th><td><xsl:value-of select="name"/></td>                                 
            </tr>
            <tr>
                <th>Email:</th><td><xsl:value-of select="email"/></td>                                 
            </tr>
            <tr>
                <th>Photo:</th>
                <td>
                    <xsl:variable name="img" select="photo/@path"/>
                    <img src="{$img}" width="100" height="100"/>
                </td>                                 
            </tr>
        </table>
    </xsl:template>
    
    <xsl:template match="abstract">
        
        <table>
            <tr>
                <br/>
                <th>Abstract:</th>
                <td>
                    <xsl:value-of select="p"/>
                </td>
            </tr>
        </table>
    </xsl:template>
    
    
    <xsl:template match="deliverable">
        <table>
            <tr>
                <br/>
                <th>Deliverable:</th>
                <td>
                    <xsl:variable name="deliverable" select="@path"/>
                    <a href="{$deliverable}">Github</a>
                </td>
            </tr>
        </table>
    </xsl:template>
    
    
    
    
    
</xsl:stylesheet>