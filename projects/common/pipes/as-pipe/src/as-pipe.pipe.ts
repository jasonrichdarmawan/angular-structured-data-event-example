import { Pipe, PipeTransform } from "@angular/core";

/**
 * @reference https://stackoverflow.com/a/66154034/13285583
 */
@Pipe({
    name: 'as',
    pure: true,
})
export class AsPipe implements PipeTransform {
    transform<T>(value: any, _type: T): T {
        return value as T;
    }
}