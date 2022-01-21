const allowences=
{
    bs:Number(0),
    
    hra: function hra()
    {
        return this.bs*0.5;
    },
    
    da: function da()
    {
        return this.bs*0.2;
    },
    
    ta: function ta()
    {
        return this.bs*0.3;
    },
    
    ma: function ma()
    {
        return this.bs*0.15;
    },
    
    pf: function pf()
    {
        return this.bs*0.05;
    },
    
    gs: function gs()
    {
        return this.bs+this.hra()+this.da()+this.ta()+this.ma();
    },
    
    ns: function ns()
    {
        return this.gs()-this.pf();
    }
};