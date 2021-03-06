export default [
    {
        name: 'Grandpa',
        children: [{
            name: 'Uncle Leo',
            value: 15,
            children: [{
                name: 'Cousin Jack',
                value: 2
            }, 
            {
                name: 'Cousin Mary',
                value: 5,
                children: [{
                    name: 'Jackson',
                    value: 2
                }]
            }, 
            {
                name: 'Cousin Ben',
                value: 4
            }]
        }, 
        {
            name: 'Aunt Jane',
            children: [{
                name: 'Cousin Kate',
                value: 4
            }]
        }, 
        {
            name: 'Father',
            value: 10,
            children: [{
                name: 'Me',
                value: 5,
                itemStyle: {
                    color: 'red'
                }
            }, 
            {
                name: 'Brother Peter',
                value: 1
            }]
        }]
    },
     {
        name: 'Mike',
        children: [{
            name: 'Uncle Dan',
            children: [{
                name: 'Cousin Lucy',
                value: 3
            }, 
            {
                name: 'Cousin Luck',
                value: 4,
                children: [{
                    name: 'Nephew',
                    value: 2
                }]
            }]
        }]
    }, 
    {
        name: 'Nancy',
        children: [{
            name: 'Uncle Nike',
            children: [{
                name: 'Cousin Betty',
                value: 1
            }, 
            {
                name: 'Cousin Jenny',
                value: 2
            }]
        }]
    }]