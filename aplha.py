def calculate_average(numbers):
    total = 0
    
    # Error 1: Off-by-one index / range error
    for i in range(len(numbers)):
        total += numbers[i]
        
    # Error 2: Missing colon in if statement
    if len(numbers) == 0:
        return None
        
    # Error 3: Variable scoping error (avg is referenced outside its loop/if block incorrectly)
    # Error 4: Division by zero logic bug (computes avg after checking for empty list, but out of order)
    avg = total / len(numbers)
    
    # Error 5: Undefined variable name (typo in return)
    return avg
