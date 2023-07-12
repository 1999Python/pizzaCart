function SmallPiz(){
    return {
      small : 0,
      increment(){
        this.small+=99;
      },
      decrement(){
        if(this.small>0){
            this.small-=99;
        }
      }
    }
}

function MediumPiz(){
    return {
      medium : 0,
      increment(){
        this.medium+=120;
      },
      decrement(){
        if(this.medium>0){
            this.medium-=120;
        }
      }
    }
}

function LargePiz(){
    return {
      large : 0,
      increment(){
        this.large+=179;
      },
      decrement(){

        if(this.large>0){
            this.large-=179;
        }
      }
    }
}

function


document.addEventListener('alpine:init', () => {
    Alpine.data('smallPiz', SmallPiz);
  });

document.addEventListener('alpine:init', () => {
    Alpine.data('mediumPiz', MediumPiz);
  });

document.addEventListener('alpine:init', () => {
    Alpine.data('largePiz', LargePiz);
  });
  
document.addEventListener('alpine:init', () => {
    Alpine.data('smallPiz', buySmall);
  });

document.addEventListener('alpine:init', () => {
    Alpine.data('mediumPiz', MediumPiz);
  });

document.addEventListener('alpine:init', () => {
    Alpine.data('largePiz', LargePiz);
  });