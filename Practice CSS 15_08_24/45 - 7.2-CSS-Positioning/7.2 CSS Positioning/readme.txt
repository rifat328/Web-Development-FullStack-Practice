Positioning 
    1.Static (by default)
    2.Relative (Relative to default Positioning -means Relative to Static)
    3.Absolute
    4.Fixed

1.Static (by default): static Positioning, its a default Positioning, if we apply 
    left: 50px;
    top:  50px;
    it dosent do anything because it's static Position

2.Relative (Relative to default Positioning -means Relative to Static)
    here if we apply same CSS with 
    Position: relative ;
    left: 50px;
    top:  50px;

    it will push that element from left and top 50px, compare to static Position,
    thats why its called Relative Positioning.
    
3.Absolute :rule1: Position relative to nearest Positioned ancestor,
        rule 2 : if rule1 dosent have then top left corner of webpage.
    Z-index: determines which one comes top of between eachother ,if we have 
        x as width that goes left and y As height that goes bottom to top ,
        then another direction or dimension is z .
        
        if B= 50 and A= 100 then A will come top between these 2 Elements in z index

        **Everything by default has z-index: 0;
        when we have another element with Absolute Position, it will Make that element
        seperate to other and come on top of every other element so it dosent happen 
        we can make these z-index value to -1 so it will go behind other Elements

4.Fixed : Position relative to Top left corner of browser window
    even if we scrool it wont Change.