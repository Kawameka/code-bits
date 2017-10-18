// Code Bit #1
// beginner's template for Writing C++ code in main function
#include <iostream>
using namespace std;

int main()
{
    cout << "Hello World!\n";
    return 0;
}

// End Code Bit #1

// Code Bit #2
// Template for creating an if-else statement
#include <iostream>
using namespace std;

int main()
{
    int num = 1;
    
    if(num == 2) 
    {
        cout << "Num = 2";
    }
    else if(num == 1) 
    {
        cout << "Num = 1";
    }
    else 
    {
        cout << "Num does not equal 1 or 2.";
    }
    
    return 0;
}

// End Code Bit #2

// Code Bit #3
// Template for a for-loop
#include <iostream>
using namespace std;

int main()
{
    int iterations = 10;
    
    for(int inc = 0; inc < iterations; inc++)
    {
        cout << "We are have looped " << inc << " times!" << endl;
    }
    
    return 0;
}

// End Code Bit #3

// Code Bit #4
// Template for while loop
#include <iostream>
using namespace std;

int main()
{
    int iterations = 10;
    int inc = 0;
    
    while(inc < iterations)
    {
        cout << "Loop " << inc << endl;
        
        inc++; // Incrementing the counter
    }
    
    return 0;
}

// End Code Bit #4
